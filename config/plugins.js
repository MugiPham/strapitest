module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AKIA4KPJCZNKADDXXFUZ'),
      secretAccessKey: env('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'),
      region: 'us-east-1',
      params: {
        Bucket: 'mkpl-images',
      },
    },
  },
});
 
