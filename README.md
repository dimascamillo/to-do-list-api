# APP

TO DO LIST

## RFs (Requisitos funcionais)

- [ ] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível cadastrar uma nova Task;
- [ ] Deve ser possível obter o número de Tasks cadastradas pelo usuário logado;
- [ ] Deve ser possível o usuário obter seus histórico de Tasks;
- [ ] Deve ser possível o usuário buscar tasks pela descrição ou status;

## RNs (Regras de negócio)

- [ ] O usuário não poderá se cadastrar com um e-mail já cadastrado;
- [ ] O tempo de uma Task não poderá ser inferior a 10 minutos;
- [ ] A task só poderá ser editada por um administrador;
- [ ] Novos Status só poderão ser cadastrados por um administrador;

## RNFs (Requisitos não-funcionais)

- [ ] A senha do usuário precisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas as listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);
