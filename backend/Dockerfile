FROM python:3.12.8-bullseye as builder

RUN pip install pipx && \
    pipx ensurepath && \
    pipx install poetry==2.0.1

ENV PATH="/root/.local/bin:$PATH"

ENV POETRY_NO_INTERACTION=1 \
    POETRY_VIRTUALENVS_IN_PROJECT=1 \
    POETRY_VIRTUALENVS_CREATE=1 \
    POETRY_CACHE_DIR=/tmp/poetry_cache

WORKDIR /code

COPY pyproject.toml poetry.lock ./
RUN touch README.md

RUN poetry install --no-root && rm -rf $POETRY_CACHE_DIR

FROM python:3.12.8-slim-bullseye as runtime

ENV VIRTUAL_ENV=/code/.venv \
    PATH="/code/.venv/bin:$PATH"

COPY --from=builder ${VIRTUAL_ENV} ${VIRTUAL_ENV}

COPY app ./app

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]