import dinoStat from "../../img/dino/dino-stationary.png"
import dinoRun0 from "../../img/dino/dino-run-0.png"
import dinoRun1 from "../../img/dino/dino-run-1.png"
import dinoLose from "../../img/dino/dino-lose.png"

import {
    getCustomProperty,
    incrementCustomProperty,
    setCustomProperty,
} from './update.js';


const dinosaur = document.getElementById('dinosaur');

const JUMP_SPEED = 0.45;
const GRAVITY = 0.0015;
const DINO_FRAME_COUNT = 2;
const FRAME_TIME = 100;


let isJumping;
let dinoFrame;
let currentFrameTime;
let yVelocity;


export function setupDino() {
    isJumping = false;
    dinoFrame = 0;
    currentFrameTime = 0;
    yVelocity = 0;
    setCustomProperty(dinosaur, '--bottom', 0);

    document.removeEventListener('keydown', onJump);
    document.addEventListener('keydown', onJump);
}


export function updateDino(delta, speedScale) {
    handleRun(delta, speedScale);
    handleJump(delta);
}


export function getDinoRect() {
    return dinosaur.getBoundingClientRect();
}

export function setDinoLose() {
    dinosaur.src = dinoLose;
}


function handleRun(delta, speedScale) {
    const dinoRunFrames = [dinoRun0, dinoRun1];

    if (isJumping) {
        dinosaur.src = dinoStat;
        return;
    }

    if (currentFrameTime >= FRAME_TIME) {
        dinoFrame = (dinoFrame + 1) % DINO_FRAME_COUNT;
        dinosaur.src = dinoRunFrames[dinoFrame];
        currentFrameTime -= FRAME_TIME;
    }

    currentFrameTime += delta * speedScale;
}


function handleJump(delta) {
    if (!isJumping) return;

    incrementCustomProperty(dinosaur, '--bottom', yVelocity * delta);

    if (getCustomProperty(dinosaur, '--bottom') <= 0) {
        setCustomProperty(dinosaur, '--bottom', 0);
        isJumping = false;
    }

    yVelocity -= GRAVITY * delta;
}


function onJump(e) {
    if (e.code !== 'Space' || isJumping) return;

    yVelocity = JUMP_SPEED;
    isJumping = true;
}



