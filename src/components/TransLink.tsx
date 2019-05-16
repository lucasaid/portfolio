import TransitionLink from "gatsby-plugin-transition-link";
import React, { memo } from "react";
import { AnimationContext } from "../layouts/main";

interface Props {
  to?: string;
  children?: any;
}
class TransLink extends React.Component<Props> {
  static contextType = AnimationContext;
  render() {
    return (
      <TransitionLink
        exit={{
          length: 1,
          trigger: ({ exit }) => this.context(exit, "right")
        }}
        entry={{ delay: 1 / 2, length: 1 / 2 }}
        to={this.props.to}
      >
        {this.props.children}
      </TransitionLink>
    );
  }
}
export default memo(TransLink);
