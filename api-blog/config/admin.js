module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bcc0a724d24bb485287ccc5dd98a36f8'),
  },
});
