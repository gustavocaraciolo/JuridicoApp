package com.br.juridicoapp.application.service.mapper;

import com.br.juridicoapp.application.domain.*;
import com.br.juridicoapp.application.service.dto.JobDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Job and its DTO JobDTO.
 */
@Mapper(componentModel = "spring", uses = {EmployeeMapper.class, TaskMapper.class, })
public interface JobMapper extends EntityMapper <JobDTO, Job> {

    @Mapping(source = "employee.id", target = "employeeId")
    JobDTO toDto(Job job); 

    @Mapping(source = "employeeId", target = "employee")
    Job toEntity(JobDTO jobDTO); 
    default Job fromId(Long id) {
        if (id == null) {
            return null;
        }
        Job job = new Job();
        job.setId(id);
        return job;
    }
}
