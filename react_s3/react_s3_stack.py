from aws_cdk import core as cdk
from aws_solutions_constructs import aws_cloudfront_s3
from aws_cdk import aws_s3_deployment


class ReactS3Stack(cdk.Stack):

    def __init__(self, scope, construct_id, **kwargs):
        super().__init__(scope, construct_id, **kwargs)
        self.cloudfront_to_s3 = aws_cloudfront_s3.CloudFrontToS3(
            self,
            'ReactFrontend',
        )
        self.deployment = aws_s3_deployment.BucketDeployment(
            self,
            'S3FrontendDeployment',
            sources=[
                aws_s3_deployment.Source.asset('./react_s3/frontend/build/'),
            ],
            destination_bucket=self.cloudfront_to_s3.s3_bucket,
            distribution=self.cloudfront_to_s3.cloud_front_web_distribution,
            distribution_paths=['/*'],
        )
