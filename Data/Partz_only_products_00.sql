CREATE TABLE `products` (
	`id` CHAR(7) NOT NULL UNIQUE,
	`product_type_id` CHAR(7),
	`name` VARCHAR(255),
	`price` DECIMAL,
	`manufacturer_name` VARCHAR(255),
	`rating` DECIMAL,
	PRIMARY KEY(`id`)
);


CREATE TABLE `Builder` (
	`build_id` CHAR(7) NOT NULL UNIQUE,
	`Name` VARCHAR(255),
	`price` DECIMAL,
	`cpu_id` CHAR(1),
	`memory_id` CHAR(1),
	`memory_amt` INT,
	`power_supply_id` CHAR(1),
	`motherboard_id` CHAR(1),
	`operating_system_id` CHAR(1),
	PRIMARY KEY(`build_id`)
);

CREATE INDEX `Builder_index_0`
ON `Builder` (`build_id`);
CREATE TABLE `product_type_lookup` (
	`product_type_id` CHAR(7) NOT NULL UNIQUE,
	`product_type_name` VARCHAR(255),
	PRIMARY KEY(`product_type_id`)
);


CREATE TABLE `CPU` (
	`id` CHAR(7) NOT NULL UNIQUE,
	`base_clock` DECIMAL,
	`boost_clock` DECIMAL,
	`TDP` INT,
	`core_count` INT,
	`thread_count` INT,
	`cache` INT,
	`integrated_GPU` VARCHAR(255),
	`PCIE_GEN` DECIMAL,
	`Socket` VARCHAR(255),
	PRIMARY KEY(`id`)
);

CREATE INDEX `CPU_index_0`
ON `CPU` (`id`);
CREATE TABLE `OS_lookups` (
	`id` CHAR(1) NOT NULL UNIQUE,
	`name` VARCHAR(255),
	`price` DECIMAL,
	`manufacturer_name` VARCHAR(255),
	PRIMARY KEY(`id`)
);


CREATE TABLE `GPU` (
	`id` CHAR(7) NOT NULL UNIQUE,
	`VRAM` INT,
	`base_clock` DECIMAL,
	`boost_clock` DECIMAL,
	`cuda_cores` INT,
	`rt_cores` INT,
	`TDP` INT,
	`PCIE_gen` DECIMAL,
	`Form_Factor` VARCHAR(255),
	`RT_enabled` BOOLEAN,
	`DLSS_version` DECIMAL,
	`FSR_version` DECIMAL,
	PRIMARY KEY(`id`)
);


CREATE TABLE `motherboard` (
	`id` CHAR(7) NOT NULL UNIQUE,
	`socket` VARCHAR(255),
	`chipset` VARCHAR(255),
	`form_factor` VARCHAR(255),
	`PCI-e_lookup` CHAR(7),
	`Memory_lookup` CHAR(7),
	`storage_lookup` CHAR(7),
	`ports_lookup` CHAR(7),
	PRIMARY KEY(`id`)
);


CREATE TABLE `PCI-e_lookup` (
	`id` CHAR(7) NOT NULL UNIQUE,
	`Slot_type` INT,
	`generation` DECIMAL,
	`amount` INT,
	PRIMARY KEY(`id`, `Slot_type`, `generation`)
);


CREATE TABLE `Memory_lookup` (
	`id` CHAR(7) NOT NULL UNIQUE,
	`ddr_generation` INT,
	`amount` INT,
	`channel` INT,
	`max_amount` INT,
	`max_speed` INT,
	PRIMARY KEY(`id`)
);


CREATE TABLE `storage_lookup` (
	`id` CHAR(7) NOT NULL UNIQUE,
	`Type` VARCHAR(255),
	`amount` INT,
	`genertion` DECIMAL,
	PRIMARY KEY(`id`, `Type`)
);


CREATE TABLE `ports_lookup` (
	`id` CHAR(7) NOT NULL UNIQUE,
	`type` VARCHAR(255),
	`amount` INT,
	PRIMARY KEY(`id`, `type`)
);


CREATE TABLE `memory` (
	`id` CHAR(7) NOT NULL UNIQUE,
	`generation` VARCHAR(255),
	`amount` INT,
	`size` VARCHAR(255),
	`speed` VARCHAR(255),
	PRIMARY KEY(`id`)
);


CREATE TABLE `power_supply` (
	`id` CHAR(7) NOT NULL UNIQUE,
	`wattage` INT,
	`certification` VARCHAR(255),
	`fansize` VARCHAR(255),
	`modular` BOOLEAN,
	`form_factor` VARCHAR(255),
	PRIMARY KEY(`id`)
);


CREATE TABLE `storage` (
	`id` CHAR(7) NOT NULL UNIQUE,
	`interface` VARCHAR(255),
	`form_factor` VARCHAR(255),
	`capacity` VARCHAR(255),
	`RW_speeds` VARCHAR(255),
	`DRAM_cache` VARCHAR(255),
	`RPM` INT,
	PRIMARY KEY(`id`)
);


ALTER TABLE `products`
ADD FOREIGN KEY(`product_type_id`) REFERENCES `product_type_lookup`(`product_type_id`)
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE `Builder`
ADD FOREIGN KEY(`operating_system_id`) REFERENCES `OS_lookups`(`id`)
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE `Builder`
ADD FOREIGN KEY(`cpu_id`) REFERENCES `products`(`id`)
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE `Builder`
ADD FOREIGN KEY(`memory_id`) REFERENCES `products`(`id`)
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE `Builder`
ADD FOREIGN KEY(`power_supply_id`) REFERENCES `products`(`id`)
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE `Builder`
ADD FOREIGN KEY(`motherboard_id`) REFERENCES `products`(`id`)
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE `motherboard`
ADD FOREIGN KEY(`PCI-e_lookup`) REFERENCES `PCI-e_lookup`(`id`)
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE `Memory_lookup`
ADD FOREIGN KEY(`id`) REFERENCES `motherboard`(`Memory_lookup`)
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE `motherboard`
ADD FOREIGN KEY(`storage_lookup`) REFERENCES `storage_lookup`(`id`)
ON UPDATE NO ACTION ON DELETE NO ACTION;
ALTER TABLE `motherboard`
ADD FOREIGN KEY(`ports_lookup`) REFERENCES `ports_lookup`(`id`)
ON UPDATE NO ACTION ON DELETE NO ACTION;