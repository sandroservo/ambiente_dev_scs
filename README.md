# Para executar o ambiente dev

libere a permissão  de execusão 
dentro da pasta dev 
chmod +x ./.docker/start.sh

# Para  acessar o container app execute este comando
 docker-compose exec app bash

# Para  excuta o prisma studio
 npx prisma studio
 Vai aparecer este log no bash do container
 Prisma Studio is up on http://localhost:5555   

copia esta url http://localhost:5555 para acessar e manipular o banco
