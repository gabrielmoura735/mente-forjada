/**
 * MENTE FORJADA - GERADOR DE ÁUDIO AMBIENTE ESTOICO
 * Utiliza a Web Audio API pura para gerar som imersivo de foco (Ruído Marrom / Chuva Suave)
 * e harmônicos relaxantes sem depender de arquivos externos de áudio.
 */

class StoicAmbientSound {
    constructor() {
        this.ctx = null;
        this.isPlaying = false;
        this.masterGain = null;
        this.noiseNode = null;
        this.filter = null;
        this.droneOsc = null;
        this.droneGain = null;
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();

            // Master Gain
            this.masterGain = this.ctx.createGain();
            this.masterGain.gain.setValueAtTime(0.15, this.ctx.currentTime);
            this.masterGain.connect(this.ctx.destination);
        }
    }

    toggle() {
        if (this.isPlaying) {
            this.stop();
            return false;
        } else {
            this.start();
            return true;
        }
    }

    start() {
        this.init();
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }

        // 1. Gerador de Ruído Marrom (Chuva / Vento de Foco)
        const bufferSize = 2 * this.ctx.sampleRate;
        const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let lastOut = 0.0;

        for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            output[i] = (lastOut + (0.02 * white)) / 1.02;
            lastOut = output[i];
            output[i] *= 3.5; // Ganho perceptível
        }

        this.noiseNode = this.ctx.createBufferSource();
        this.noiseNode.buffer = noiseBuffer;
        this.noiseNode.loop = true;

        // Filtro Passa-Baixa (Suaviza para som aconchegante)
        this.filter = this.ctx.createBiquadFilter();
        this.filter.type = 'lowpass';
        this.filter.frequency.setValueAtTime(450, this.ctx.currentTime);

        this.noiseNode.connect(this.filter);
        this.filter.connect(this.masterGain);

        // 2. Drone Harmônico Grave Sutil (Frequência meditativa ~108Hz)
        this.droneOsc = this.ctx.createOscillator();
        this.droneOsc.type = 'sine';
        this.droneOsc.frequency.setValueAtTime(108, this.ctx.currentTime);

        this.droneGain = this.ctx.createGain();
        this.droneGain.gain.setValueAtTime(0.04, this.ctx.currentTime);

        this.droneOsc.connect(this.droneGain);
        this.droneGain.connect(this.masterGain);

        this.noiseNode.start();
        this.droneOsc.start();
        this.isPlaying = true;
    }

    stop() {
        if (!this.isPlaying) return;

        try {
            if (this.noiseNode) {
                this.noiseNode.stop();
                this.noiseNode.disconnect();
            }
            if (this.droneOsc) {
                this.droneOsc.stop();
                this.droneOsc.disconnect();
            }
        } catch (e) {
            console.error('Erro ao parar áudio', e);
        }

        this.isPlaying = false;
    }
}

// Instância global para o app
window.ambientSound = new StoicAmbientSound();
