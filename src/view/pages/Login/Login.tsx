import { Button, Input } from 'components/index';

export function Login() {
  return (
    <div>
      <div className="text-center">
        <h1>Entrar</h1>
        <p>Acesse sua conta usando seu e-mail e senha ou sua conta Google.</p>
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
