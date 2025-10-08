export default class Score {
    score = 0;
    HIGH_SCORE_KEY = "HighScore ";


    constructor(ctx,scaleRatio) {
        this.ctx = ctx;
        this.canvas = ctx.canvas;
        this.scaleRatio = scaleRatio;
    }
        update(frameTimeDelta){
            this.score += frameTimeDelta * 0.01;
        }
        reset(){
            this.score = 0;
        }
        setHighScore(){
            const HighScore = Number(localStorage.getItem(this.HIGH_SCORE_KEY));
            if(this.score > HighScore){
                localStorage.setItem(this.HIGH_SCORE_KEY, Math.floor(this.score));
            }
        }
        draw(){
            const HighScore = Number(localStorage.getItem(this.HIGH_SCORE_KEY));
            const y = 20 * this.scaleRatio;
            const fontSize = 20 * this.scaleRatio;
            this.ctx.font = `${fontSize}px serif`;
            this.ctx.fillStyle = "#525250";
            const scoreX = this.canvas.width - 75 * this.scaleRatio;
            const HighScoreX = scoreX - 125 * this.scaleRatio;
            const scorePadded = Math.floor(this.score).toString().padStart(6,0);
            const HighScorePadded = HighScore.toString().padStart(6,0);
            this.ctx.fillText(scorePadded, scoreX, y);
            this.ctx.fillText(`HI ${HighScorePadded}`, HighScoreX, y);
    

        }
}
