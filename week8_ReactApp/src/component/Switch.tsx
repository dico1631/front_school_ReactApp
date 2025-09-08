import styled, { css } from 'styled-components';
import { useBoolean } from 'usehooks-ts';
import Button from './Button';
import PrimaryButton from './PrimaryButton';

export default function Switch() {
  const { value: active, toggle } = useBoolean();

  const handleClick = () => {

  };

  return (
    <div>
      <Button onClick={toggle} active={active}>on/off</Button>
      <Button type="submit" onClick={toggle} active={active}>on/off</Button>
      <PrimaryButton onClick={toggle} active={active}>on/off</PrimaryButton>
    </div>
  );
}
