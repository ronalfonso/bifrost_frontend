import React, {
  useLayoutEffect,
  forwardRef,
  ReactElement,
  useEffect,
} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ISubHeaderProps } from "../SubHeader/SubHeader";
import { IPageProps } from "../Page/Page";
import { useNavigate } from "react-router-dom";
import {useAppSelector} from '../../store';

interface IPageWrapperProps {
  isProtected?: boolean;
  title?: string;
  description?: string;
  children:
    | ReactElement<ISubHeaderProps>[]
    | ReactElement<IPageProps>
    | ReactElement<IPageProps>[];
  className?: string;
}
const PageWrapper = forwardRef<HTMLDivElement, IPageWrapperProps>(
  ({ isProtected, title, description, className, children }, ref) => {
      const {user} = useAppSelector((state) => state.auth);
      useLayoutEffect(() => {
      // @ts-ignore
      document.getElementsByTagName("TITLE")[0].text = `${
        title ? `${title} | ` : ""
      } Bifrost`;
      // @ts-ignore
      document
        ?.querySelector('meta[name="description"]')
        .setAttribute(
          "content",
          description || process.env.REACT_APP_META_DESC || ""
        );
    });

      const navigate = useNavigate();
		
    useEffect(() => {
      if (isProtected && user.username === "") {
        navigate(`../auth/login`);
      }
      return () => {};
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <div
        ref={ref}
        className={classNames("page-wrapper", "container-fluid", className)}
        style={{display: 'flex', flex: '1 0 auto', flexDirection: 'column'}}
      >
        {children}
      </div>
    );
  }
);

PageWrapper.displayName = "PageWrapper";
PageWrapper.propTypes = {
  isProtected: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  // @ts-ignore
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
PageWrapper.defaultProps = {
  isProtected: true,
  title: undefined,
  description: undefined,
  className: undefined,
};

export default PageWrapper;
