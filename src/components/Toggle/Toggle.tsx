import './styles.scss';
import { Option } from '../Select';
import classNames from 'classnames';
import { useState } from 'react';

interface Props {
  options: [Option, Option];
  onToggle: (option: Option) => void;
  className?: string;
}

function Toggle(props: Props) {
  const { options, onToggle, className = '' } = props;

  const [selectedOption, setSelectedOption] = useState<0 | 1>(0);

  const toggle = () => {
    const newSelectedOption = selectedOption === 0 ? 1 : 0;
    onToggle(options[newSelectedOption]);
    setSelectedOption(newSelectedOption);
  };

  return (
    <div className={`toggle ${className}`} onClick={toggle}>
      <div
        className={classNames('toggle__option', {
          'toggle__option--selected': selectedOption === 0,
        })}
      >
        {options[0].title}
      </div>
      <div
        className={classNames('toggle__option', {
          'toggle__option--selected': selectedOption === 1,
        })}
      >
        {options[1].title}
      </div>
      <div
        className={classNames('toggle__slider', {
          'toggle__slider--left': selectedOption === 0,
          'toggle__slider--right': selectedOption === 1,
        })}
      ></div>
    </div>
  );
}

export default Toggle;
