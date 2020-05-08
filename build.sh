#!/bin/bash

echo "打包文件"
echo -e "传输h5mall文件 \n"
scp -r ./dist/** /usr/share/nginx/html/h5mall/
echo "h5mall部署成功 --> http://h5mall.cafewallet.cn/ "
