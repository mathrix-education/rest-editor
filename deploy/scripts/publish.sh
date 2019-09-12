#!/bin/ash
WORKSPACE_DIR=$(dirname $(dirname $(cd $(dirname $0) && pwd)))

while getopts ":c:t:" opt; do
  case ${opt} in
  c)
    commit=${OPTARG}
    ;;
  t)
    tag=${OPTARG}
    ;;
  \?)
    echo "Invalid option: -$OPTARG"
    ;;
  esac
done

DIST_DIR="${WORKSPACE_DIR}/dist/rest-editor"

if [ ! -z "${tag}" ]; then
  # We will deploy a stable version
  npm publish "${DIST_DIR}" --tag "v${tag}"
else
  # We will deploy a latest version
  node "${WORKSPACE_DIR}/deploy/scripts/patch-version.js" "${commit}"
  npm publish "${DIST_DIR}" --tag latest
fi
