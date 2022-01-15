for file in *.HEIC
do 
	mv "$file" "${file/.HEIC/.jpg}"
done

for file in *.RW2
do 
	mv "$file" "${file/.RW2/.jpg}"
done
