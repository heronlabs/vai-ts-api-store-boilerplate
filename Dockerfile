FROM public.ecr.aws/lambda/nodejs:14

COPY . ${LAMBDA_TASK_ROOT}

RUN npm i -g yarn \
  && yarn install --frozen-lockfile \
  && yarn cache clean \
  && yarn compile

CMD [ "bin/entry-point.handler" ]