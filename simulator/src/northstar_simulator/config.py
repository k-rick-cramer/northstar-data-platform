from dataclasses import dataclass
from datetime import date


@dataclass(frozen=True)
class SimulationConfig:
    """Configuration controlling a reproducible Northstar simulation."""

    seed: int
    start_date: date
    end_date: date
    customer_count: int
    product_count: int
    warehouse_count: int

    def __post_init__(self) -> None:
        if self.end_date < self.start_date:
            raise ValueError("end_date must be on or after start_date")

        if self.customer_count < 1:
            raise ValueError("customer_count must be at least 1")

        if self.product_count < 1:
            raise ValueError("product_count must be at least 1")

        if self.warehouse_count < 1:
            raise ValueError("warehouse_count must be at least 1")

    @property
    def day_count(self) -> int:
        """Number of calendar days represented by the simulation."""
        return (self.end_date - self.start_date).days + 1


DEFAULT_CONFIG = SimulationConfig(
    seed=20260908,
    start_date=date(2022, 1, 1),
    end_date=date(2025, 12, 31),
    customer_count=50_000,
    product_count=500,
    warehouse_count=4,
)
