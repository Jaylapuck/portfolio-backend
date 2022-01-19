module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '540634b25ffd325523e17be53d99fcf7'),
  },
});
