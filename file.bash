# for each folder in current directory:
#     folder_name.md file should be created
#     mkdir folder_name.md

for dir in */ ; do 
    cd "$dir"
    dir_name=${dir%/}
    touch $dir_name.md
    touch index.html
    touch style.css

    cd ..
done


