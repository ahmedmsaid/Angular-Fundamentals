import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { ISession } from "../shared/event.model";
import { AuthService} from "src/app/user/auth.service";
import { VoterService } from "./voter.service";

@Component({
    selector: 'sessions-list',
    templateUrl: './sessions-list.component.html'
})

export class SessionsListComponent implements OnChanges{
    @Input() sessions!: ISession[]
    @Input() filterBy!: string
    @Input() sortBy!: string
    @Input() eventId!: number
    visibleSessions: ISession[] = []

    constructor(public authService: AuthService, private voterService: VoterService){}

    ngOnChanges() {
        if(this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
        }
    }

    toggleVote(session: ISession){
        if(this.userHasVoted(session)){
            this.voterService.deleteVoter(this.eventId, session, this.authService.currentUser.userName)
        } else {
            this.voterService.addVoter(this.eventId, session, this.authService.currentUser.userName)
        }
        if(this.sortBy === 'votes')
            this.visibleSessions.sort(sortByVotesDesc)
    }

    userHasVoted(session: ISession){
        return this.voterService.userHasVoted(session, this.authService.currentUser.userName)
    }

    filterSessions(filter: string){
        if(filter == 'all') {
            this.visibleSessions = this.sessions.slice(0);
        } 
        else {
            this.visibleSessions = this.sessions.filter(sessions => sessions.level.toLowerCase() === filter)
        }
    }
}

function sortByNameAsc(s1: ISession, s2: ISession){
    if (s1.name > s2.name) return 1
    else if (s1.name === s2.name) return 0
    else return -1
}

function sortByVotesDesc(s1: ISession, s2: ISession){
    return s2.voters.length - s1.voters.length
}