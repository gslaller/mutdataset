# mutdataset

A mutable dataset repository for machine learning.

## MVP thoughts:

1. The user can register/identify himself with firebase/auth {google, github}
2. The user can upload the video along with GPS and IMU data to a presigned s3 bucket.
3. The user can preview the video alongside the data from other users.
4. The user can request a presigned URL to download the whole dataset.
5. Backend has to do some sort of compaction, so that the user doesn't have to upload

## Long term goals:

1. Have a generic interface where users can share and annotate their data.
