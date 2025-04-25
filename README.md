# projetos-conhecimentos

Bem-vindos ao meu portfólio de conhecimentos gerais.

SSH: Secure Socket Shell
Com a conexão SSH é possível fazer conexões, a porta 22 de um servidor se ela estiver liberada pelo UFW, também é possível criar uma chave com ssh-keygen e coloca-lá em um novo usuário com adduser, é necessário colocar a chave pública no authorized_keys do usuário, permitir a ele determinados grupos ou da-ló permissão total ao servidor.Lembrando também que se você desejar pode fazer uma conexão no terminal ssh -i nome_do_usuario@endereco_do_servidor se tiver VSCODE pode habilitar a extensão do SSH, e apenas configurar o host, assim você consegue fazer a conexão executando apenas o comando ssh HOSTNAME. 

![image](https://github.com/Alerpina/projetos-conhecimentos/assets/101226446/a79c6c22-8d72-44a9-990f-7e9422132e0c)

FTP: Transmission Control Protocol/Internet Protocol
Ao criar um usuário FTP é necessário habilitar sua porta 21, mas é claro depois aplicar um protocolo de segurança para impedir acessos externos, você pode utilizar o iptables, agora sim em um servidor Ubuntu 22.04, instalei o VSFTPD pois não queria fazer uma conexão direta, no arquivo geral do conf localizado em etc/vsftpd.conf é possível editar várias regras de conexões, permissões e outros beneficios que você pode lêr na documentação, se quiser instalar essa ferramenta basta instalar o serviço com sudo apt-get install vsftpd, lembre-se de atualizar seu repositório. 
Criei um novo usuário com adduser adicionei ele nas configurações do /etc/vsftpd e limitei acesso a um diretório especifico, testei esse usuário com FilleZilla.
![image](https://github.com/Alerpina/projetos-conhecimentos/assets/101226446/eb26828d-a230-4a2d-9196-40be16fca159)

Nginx: Web Server
O nginx também pode ser usado para direcionar o tráfego para diferentes partes de um site ou até mesmo para vários servidores, ajudando a garantir que as coisas funcionem que o site esteja sempre disponível, distribuindo cargas conhecido como load-balance mas o principal objetivo dele é se comunicar com a web, também te socorre em casos extemos, exemplo, um dia eu precisei alterar /etc/nginx/sites-available/loja.conf eu configurei para receber mais dados de images  client_max_body_size 20M; pois é comum ocorrer o erro 413 do nginx, conhecido pela imagem ser muito grande, então em casos extremos eu permito em só um projeto se necessário. Utilizo ele em meus servidores, é uma configuração eficaz e simples, proxy reverse sempre bem-vindo, e outras funcionalidades que você pode visualizar na documentação.
![image](https://github.com/Alerpina/projetos-conhecimentos/assets/101226446/f2878220-9882-44c0-8589-226f3dc53ce0)


SCP: transferir arquivos entre dois hosts.
Eu utilizei o SCP para migrar meus servidores, foi necessário zipar as pastas, criar um novo snapshot e apontar os domínios para esse servidor de backup, eu precisei migrar a pasta storage, precisei zipar com o zip -r e usar o scp para transferir essas pastas para o novo servidor. Aqui estão uns exemplos de comandos Copiar um arquivo do local para um servidor remoto: scp arquivo.txt usuario@endereco_do_servidor:/caminho/no/servidor/
Copiar um arquivo do servidor remoto para o seu sistema local: scp usuario@endereco_do_servidor:/caminho/no/servidor/arquivo.txt /caminho/no/sistema/local/
Copiar um diretório inteiro do local para um servidor remoto: scp -r diretorio_local usuario@endereco_do_servidor:/caminho/no/servidor/
Copiar um diretório inteiro do servidor remoto para o seu sistema local: scp -r usuario@endereco_do_servidor:/caminho/no/servidor/diretorio_remoto /caminho/no/sistema/local/
Especificar uma porta SSH diferente: scp -P 2222 arquivo.txt usuario@endereco_do_servidor:/caminho/no/servidor/


NEW FILES






