#!/bin/bash

# checkout branch main if not already on it
if [ `git rev-parse --abbrev-ref HEAD` != "main" ]; then
  git checkout main
fi

# push branch main to production
git push origin main:production