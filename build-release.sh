#!/bin/bash
clear

echo "##############################################"
echo "# SML Client - Build Release Version - $RELEASE_VERSION"
echo "##############################################"

GIT_RELEASE_VERSION=$(git describe --abbrev=0 --tags)
GIT_RELEASE_VERSION=$(echo $GIT_RELEASE_VERSION| cut -d'v' -f 2)

echo $RELEASE_VERSION
echo $GIT_RELEASE_VERSION

if [[ "$RELEASE_VERSION" == "$GIT_RELEASE_VERSION" ]]; then
    echo "Release version $RELEASE_VERSION already exists on git!"
else
    git add .
    git commit -m "Build release version $RELEASE_VERSION"
    git push
    git push --tags
    npm publish
fi
