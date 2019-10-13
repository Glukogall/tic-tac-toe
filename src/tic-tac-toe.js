class TicTacToe {
    constructor() {
        this.matrix=[['0', '0', '0'], ['0', '0', '0'], ['0', '0', '0']];
        this.winner;
        this.cell = false;
        this.player='x'

    }

    getCurrentPlayerSymbol() {
        return this.player
    }

    nextTurn(rowIndex, colIndex) {
        if (this.matrix[rowIndex][colIndex]=='0'){
            this.matrix[rowIndex][colIndex]=this.player;
            if (this.player=='x')
            {this.player='o'}
        else if (this.player=='o'){this.player='x'}
        }
        if (this.matrix[rowIndex][colIndex]!='0'){
            return null
        }
        
    }

    isFinished() {
        if (this.winner!=null||this.isDraw()){
            return true
        }
        else {return false}
    }

    getWinner() {
        let winner=null;
        for (let s=0;s<3;s++){
                if (this.matrix[s][0]==this.player){
                    if (this.matrix[s][1]==this.player){
                        if (this.matrix[s][2]==this.player){
                            return this.player
                        }
                        else{winner=null}
                    }
                    else{winner=null}
                }
                else{winner=null}
        }
        
        for (let t=0;t<3;t++){
                if (this.matrix[0][t]==this.player){
                    if (this.matrix[1][t]==this.player){
                        if (this.matrix[2][t]==this.player){
                            winner=this.player
                        }
                        else{winner=null}
                    }
                    else{winner=null}
                }
                else{winner=null}
        }
            if (this.matrix[0][0]==this.player){
                if (this.matrix[1][1]==this.player){
                    if (this.matrix[2][2]==this.player){
                        winner=this.player
                    }
                    else{winner=null}
                }
                else {winner=null}
            }
            else if (this.matrix[0][2]==this.player){
                    if (this.matrix[1][1]==this.player){
                        if (this.matrix[2][2]==this.player){
                        winner=this.player
                    }
                    else{winner=null}
                }
                else {winner=null}
            }
            else{return this.winner=winner}

        



    
    }
    noMoreTurns() {
        let celln=0
        for (let r=0; r<3;r++){
            for (let c=0; c<3;c++){
                if (this.matrix[r][c]=='0'){
                    return this.cell = false;
                }
                else if(this.matrix[r][c]!='0'){
                    celln = celln+1;
                }
            }

        }
        if (celln==9)
        {return this.cell = true;}
    }

    isDraw() {
        if (this.cell==false||this.winner!= null){
            return  false;
        }
       
        else {return true}
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.matrix[rowIndex][colIndex]!='0'){
            return this.matrix[rowIndex][colIndex]
        }
        else {return null}
    }
}

module.exports = TicTacToe;
