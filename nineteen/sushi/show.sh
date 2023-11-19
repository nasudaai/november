#!/bin/bash

touch memo


for p in $(cat "$1")
do
    echo "$p yen" >> memo
done

cat memo -n | sort -k 2 -rn

rm memo
echo "rm memo"
