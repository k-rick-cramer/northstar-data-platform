from hashlib import sha256
from random import Random


def derive_seed(base_seed: int, namespace: str) -> int:
    """Derive a stable integer seed for one simulator domain."""

    if not namespace.strip():
        raise ValueError("namespace must not be blank")

    value = f"{base_seed}:{namespace}".encode("utf-8")
    digest = sha256(value).digest()

    return int.from_bytes(digest[:8], byteorder="big")


def rng_for(base_seed: int, namespace: str) -> Random:
    """Return an independent deterministic random-number generator."""

    return Random(derive_seed(base_seed, namespace))
