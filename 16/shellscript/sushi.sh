#!/bin/bash

varNum=$#

if [ "$varNum" -eq 2 ]; then
  echo "$1" >> "$2"
  cat -n "$2" | sort -k 2 -rn
  echo "last play $1yen"
else 
  echo "$1" >> points
  echo "write $1 >> points ok?"
  cat -n points | sort -k 2 -rn
  echo "last play $1yen "
fi
