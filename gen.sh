#!/usr/bin/env bash
autorest --input-file=https://www.pixelshift.io/swagger/v1/swagger.json --nodejs --output-folder=pixelshiftApi --generate-empty-classes
