#!/usr/bin/env python3
import os

from aws_cdk import core as cdk

from react_s3.react_s3_stack import ReactS3Stack
from react_s3.config import config


ENVIRONMENT = cdk.Environment(
    account=config['account'],
    region=config['region'],
)

app = cdk.App()

ReactS3Stack(
    app,
    'ReactS3Stack',
    env=ENVIRONMENT,
)

app.synth()
