let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
function solution(command){
    switch (command){
        case 'upvote':
            this.upvotes+=1;
            break;
        case 'downvote':
            this.downvotes+=1;
            break;
        case 'score':
            let upvotes = this.upvotes;
            let downvotes = this.downvotes;
            let score=upvotes-downvotes;
            let totalVotes=upvotes+downvotes;
            let rating;
            if (totalVotes >= 10) {
                if ((upvotes / totalVotes) * 100 > 66) {
                    rating = "hot";
                } else if (score >= 0 && (upvotes > 100 || downvotes > 100)) {
                    rating = "controversial";
                } else if (score < 0) {
                    rating = "unpopular";
                } else {
                    rating = "new";
                }
            } else if (totalVotes < 10) {
                rating = "new";
            }
            let add = 0;
            if (this.upvotes + this.downvotes > 50) {
                add = Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);
            }
            return [upvotes + add, downvotes + add, score, rating];
    }
}
solution.call(post, 'upvote');
solution.call(post, 'upvote');
solution.call(post, 'upvote');
solution.call(post, 'upvote');
solution.call(post, 'upvote');
solution.call(post, 'upvote');
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score');
solution.call(post, 'downvote');
score = solution.call(post, 'score');
