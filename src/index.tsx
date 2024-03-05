import './index.css';
import {rerenderEntireTree} from "./render";
import state from '../src/redux/state'


rerenderEntireTree(state)