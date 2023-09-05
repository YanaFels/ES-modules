import Game, {GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame} from './modules/game.js'

const game = new Game();
game.start();