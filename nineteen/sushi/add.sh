#!/bin/bash

echo "$1" >> "$2"

cat -n "$2" | sort -k 2 -rn

file=$2

./show.sh $file
