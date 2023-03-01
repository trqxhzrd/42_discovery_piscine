if [ $# -eq 0 ]
then echo "No arguments supplied"
else
for e in $*
do 
mkdir "ex"$e
done
fi

