#!/bin/bash

wget -N https://raw.githubusercontent.com/VSCodium/vscodium/master/update_settings.sh
chmod a+x update_settings.sh

wget -N https://raw.githubusercontent.com/VSCodium/vscodium/master/undo_telemetry.sh
chmod a+x undo_telemetry.sh

./update_settings.sh
./undo_telemetry.sh