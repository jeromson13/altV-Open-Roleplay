import * as alt from 'alt';
import * as systemsJob from '../systems/job.mjs';

alt.on('playerEnteredVehicle', (player, vehicle, seat) => {
    player.disableEngineControl();

    if (vehicle.preventHijack && seat === -1) {
        if (player.job === undefined || player.job.currentVehicle !== vehicle) {
            player.eject();
            player.send('{FF0000} This is a job vehicle. Hijacking is prevented.');
        }
    }

    if (systemsJob.isTarget(player, vehicle)) {
        player.jobTarget = vehicle.job;
    }
});
