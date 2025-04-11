export interface OptionVote {
    optionText: string;
    voteCount: number;
}

export interface Poll {
    id: number;
    question: string;
    options: OptionVote[];
}

export interface newPoll {
    question: string;
    options: OptionVote[];
}
