from datetime import date

import pytest

from northstar_simulator.config import DEFAULT_CONFIG, SimulationConfig


def test_default_config_is_valid():
    assert DEFAULT_CONFIG.seed == 20260908
    assert DEFAULT_CONFIG.start_date == date(2022, 1, 1)
    assert DEFAULT_CONFIG.end_date == date(2025, 12, 31)
    assert DEFAULT_CONFIG.customer_count == 50_000
    assert DEFAULT_CONFIG.product_count == 500
    assert DEFAULT_CONFIG.warehouse_count == 4
    assert DEFAULT_CONFIG.day_count == 1461


def test_config_rejects_reversed_dates():
    with pytest.raises(ValueError, match="end_date"):
        SimulationConfig(
            seed=1,
            start_date=date(2025, 1, 2),
            end_date=date(2025, 1, 1),
            customer_count=1,
            product_count=1,
            warehouse_count=1,
        )


@pytest.mark.parametrize(
    "field_name",
    ["customer_count", "product_count", "warehouse_count"],
)
def test_config_rejects_nonpositive_counts(field_name):
    values = {
        "customer_count": 1,
        "product_count": 1,
        "warehouse_count": 1,
    }
    values[field_name] = 0

    with pytest.raises(ValueError):
        SimulationConfig(
            seed=1,
            start_date=date(2025, 1, 1),
            end_date=date(2025, 1, 1),
            **values,
        )
