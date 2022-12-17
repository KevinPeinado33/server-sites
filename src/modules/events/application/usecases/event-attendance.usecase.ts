import { Repository } from 'sequelize-typescript'

import { EventAttendanceModel } from '../../domain/model/event-attendance.model'
import { EventAttendanceDto } from '../../infraestructure/dtos/event-attendance.dto'

export class EventAttendanceUseCase {
    
    constructor(
        private eventRepository: Repository<EventAttendanceModel>
    ){ }

    async getAllEventsAttendance() {
        return await this.eventRepository.findAll({ raw: true })
    }

    async createEvent(dtoEvent: EventAttendanceDto) {
        return await this.eventRepository.create({ ...dtoEvent })
    }

    async updateEvent(dtoEvent: EventAttendanceDto) {

        const { id, ...restEvent } = dtoEvent

        return await this
                        .eventRepository
                        .update({ ...restEvent }, { where: { id }})
                        
    }

}