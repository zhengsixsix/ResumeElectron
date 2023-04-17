import React from 'react';
import InputLess from './index.less';
import classnames from 'classnames';
const TYPE = {
  text: 'text',
  textarea: 'textarea',
};
export type SizeType = 'normal' | 'large';
export type Type = 'text' | 'textarea' | '';
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  autoFocus?: boolean;
  type?: Type;
  size?: SizeType;
  disabled?: boolean;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  allowCount?: boolean;
  allowClear?: boolean;
  rows?: number;
  style?: React.CSSProperties;
  value?: string | number | undefined;
  placeholder?: string;
  id?: string;
  maxLength?: number;
  bgTransparent?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
interface InputState {
  focus: boolean;
  text: string | number;
}
export default class Input extends React.PureComponent<InputProps, InputState> {
  input: HTMLInputElement | HTMLTextAreaElement | undefined;
  constructor(props: InputProps) {
    super(props);
    this.state = {
      focus: false,
      text: props?.value || '',
    };
  }
  componentDidMount(): void {
    if (this.props.value) {
      this.setState({
        text: this.props.value,
      });
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps: Readonly<InputProps>, nextContext: any): void {
    if (nextProps.value) {
      this.setState({
        text: nextProps.value,
      });
    }
  }
  saveInput = (input: HTMLInputElement | HTMLTextAreaElement) => {
    this.input = input;
  };
  actionChange(e: any) {
    const target = this.input as any;
    const event = Object.create(e);
    if (e.type === 'click') {
      target.value = '';
      event.target = target;
      event.currentTarget = target;
    }
    this.props.onChange && this.props.onChange(event);
  }
  focus = () => {
    this.input && this.input.focus();
  };
  onFocus = () => {
    this.setState({
      focus: false,
    });
  };
  onBlur = () => {
    this.setState({
      focus: true,
    });
  };
  onInput = (e: any) => {
    this.setState({ text: e.target.value });
    this.actionChange(e);
  };
  renderInput() {
    const { placeholder, size = 'normal', maxLength, id, disabled, autoFocus } = this.props;
    return (
      <div className={InputLess['Input-input']}>
        <input
          {...{ placeholder, maxLength, id, disabled, autoFocus }}
          className={classnames(`${InputLess.Input}`, InputLess[`Input-${size}`])}
          value={this.state.text}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onInput={this.onInput}
          ref={this.saveInput as any}
        />
      </div>
    );
  }
  renderTextarea() {
    const { placeholder, maxLength = 1000, id, disabled, allowCount = true, autoFocus, rows } = this.props;
    const _rows = rows || 3;
    const text = this.state.text;
    return (
      <div className={InputLess[`Input-textarea`]}>
        <textarea
          {...{ placeholder, maxLength, id, disabled, autoFocus }}
          rows={_rows}
          value={text}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onInput={this.onInput}
          ref={this.saveInput as any}
        />
        {allowCount && (
          <div>
            <span className={InputLess['max-length-text']}>{String(text).length}</span>
            {!!maxLength && (
              <>
                <span>/</span>
                <span>{maxLength}</span>
              </>
            )}
          </div>
        )}
      </div>
    );
  }
  render() {
    const { bgTransparent = false, style, type, allowClear } = this.props;
    return (
      <div style={style} className={classnames('my-input')}>
        {TYPE.textarea === type ? this.renderTextarea() : this.renderInput()}
      </div>
    );
  }
}
