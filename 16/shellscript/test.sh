#!/bin/bash

varNum=$#

echo $varNum

var=$1
file=$2
echo "$1 > $file" 

echo "$var" > "$file"
echo "write $var > $file"
cat "$file"
