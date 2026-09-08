import pytest

from northstar_simulator.randomness import derive_seed, rng_for


def test_same_namespace_produces_same_seed():
    assert derive_seed(20260908, "customers") == derive_seed(
        20260908,
        "customers",
    )


def test_different_namespaces_produce_different_seeds():
    assert derive_seed(20260908, "customers") != derive_seed(
        20260908,
        "products",
    )


def test_same_rng_configuration_produces_same_sequence():
    first = rng_for(20260908, "orders")
    second = rng_for(20260908, "orders")

    assert [first.random() for _ in range(5)] == [
        second.random() for _ in range(5)
    ]


def test_different_master_seed_changes_sequence():
    first = rng_for(20260908, "orders")
    second = rng_for(20260909, "orders")

    assert [first.random() for _ in range(5)] != [
        second.random() for _ in range(5)
    ]


def test_blank_namespace_is_rejected():
    with pytest.raises(ValueError, match="namespace"):
        derive_seed(20260908, "   ")
