import React, { Component } from "react";
import { Form, Icon, Input } from "antd";
import Button from "../../../components/Button";
import Block from "../../../components/Block";
import { Link } from "react-router-dom";

class LoginForm extends Component {
  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.form.validateFields((err, values) => {
  //     if (!err) {
  //       console.log("Received values of form: ", values);
  //     }
  //   });
  // };
  render() {
    return (
      <>
        <div className="auth__top">
          <h2>Войти в аккаунт</h2>
          <p>Пожалуйта, войдите в свой аккаунт</p>
        </div>
        <Block>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item validateStatus="success" hasFeedback>
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
                size="large"
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
                size="large"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" size="large">
                Войти в аккаунт
              </Button>
            </Form.Item>
            <Link className="auth__register-link" to="/register">
              Зарегистритроваться
            </Link>
          </Form>
        </Block>
      </>
    );
  }
}

export default LoginForm;
