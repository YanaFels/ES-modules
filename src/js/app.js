import { from } from 'webpack-sources/lib/CompatSource';
import '../css/style.css'
import Game, {GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame} from './modules/game'

const game = new Game();
game.start();