import React from "react";
import { Form, Icon, Input } from "antd";
import Button from "../../../components/Button";
import Block from "../../../components/Block";
import { Link } from "react-router-dom";

const RegisterForm = props => {
  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.form.validateFields((err, values) => {
  //     if (!err) {
  //       console.log("Received values of form: ", values);
  //     }
  //   });
  // };

  const success = false;

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting
  } = props;

  return (
    <>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат вам нужно зарегистрироваться</p>
      </div>
      <Block>
        {!success ? (
          <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item
              validateStatus={
                !touched.email ? "" : errors.email ? "error" : "success"
              }
              help={!touched.email ? "" : errors.email}
              hasFeedback
            >
              <Input
                id="email"
                prefix={
                  <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="E-Mail"
                size="large"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="text"
                placeholder="Ваше имя"
                size="large"
              />
            </Form.Item>
            <Form.Item
              validateStatus={
                !touched.password ? "" : errors.password ? "error" : "success"
              }
              help={!touched.password ? "" : errors.password}
              hasFeedback
            >
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Пароль"
                size="large"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Подтвердите пароль"
                size="large"
              />
            </Form.Item>
            <Form.Item>
              {isSubmitting && !isValid && <span>Ошибка!</span>}
              <Button onClick={handleSubmit} type="primary" size="large">
                Зарегистритроваться
              </Button>
            </Form.Item>
            <Link className="auth__register-link" to="/login">
              Войти в аккаунт
            </Link>
          </Form>
        ) : (
          <div className="auth__success-block">
            <div>
              <Icon
                type="info-circle"
                theme="twoTone"
                style={{ fontSize: "66px" }}
              />
            </div>
            <h2>Подтвердите свой аккаунт</h2>
            <p>
              На вашу почту отправлено письмо с ссылкой на подтверждение
              аккаунта
            </p>
          </div>
        )}
      </Block>
    </>
  );
};

export default RegisterForm;
