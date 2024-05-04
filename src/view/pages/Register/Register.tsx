import { Button, Input } from 'components/index';

export function Register() {
  return (
    <div>
      <div className="text-center">
        <h1>Cadastrar</h1>
        <p>Faça seu cadastro usando seus dados ou sua conta Google.</p>
      </div>

      <div className="flex flex-col gap-4">
        <Input placeholder="email@email.com.br" />
        <Input />
        <Button>Entrar</Button>
        <Button variant="outline">Entrar com conta Google</Button>
      </div>
    </div>
  );
}
