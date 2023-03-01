if [ $# -eq 0 ]
then echo "Not arguments supplied"
elif [ $# -lt 4 ]
then 
for e in $*
do
echo $e
done
fi




