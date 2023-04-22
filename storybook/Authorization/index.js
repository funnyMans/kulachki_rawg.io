'use client';
import AuthControllers from './actions/controllers/AuthControllers';

const Authorize = async ({ isAuth }) => {
  return (
    <div>
      <AuthControllers isAuth={isAuth} />
    </div>
  );
};

export default Authorize;
